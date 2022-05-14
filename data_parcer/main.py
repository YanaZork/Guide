# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from sys import getdefaultencoding
from selenium.webdriver.common.action_chains import ActionChains

# mas = [title, body, cls, generations, photo, years]

# Press the green button in the gutter to run the script.
if __name__ == '__main__':

    browser = webdriver.Firefox()
    browser.get('http://www.motorpage.ru/select-auto/by-mark.html')

    block = browser.find_element(By.ID, 'emblems')
    arrayBrand = block.find_elements(By.CLASS_NAME, 'zero-padding')
    hrefList = []

    for i in arrayBrand:
        try:
            tmp = i.find_element(By.TAG_NAME, 'a').get_attribute("href")
            hrefList.append(tmp)
        except Exception:
            print(Exception)
    hrefList.pop(0)

    catBrand = []
    yearCreate = []
    creators = []
    belong = []
    descriptions = []
    models = []
    h1 = []
    logo = []
    for i in hrefList:
        browser.get(i)
        fieldVal = dict()
        h1.append(browser.find_element(By.TAG_NAME, 'h1').text)
        logo.append(browser.find_element(By.TAG_NAME, 'img').get_attribute('src'))
        sent = browser.find_element(By.CLASS_NAME, 'mark-common').find_elements(By.TAG_NAME, 'dd')
        sent2 = browser.find_element(By.CLASS_NAME, 'mark-common').find_elements(By.TAG_NAME, 'dt')
        while len(sent) != 0:
            fieldVal[sent2.pop().text] = sent.pop().text
        try:
            belong.append(fieldVal['Принадлежит:'] if fieldVal['Принадлежит:'] else '')
        except Exception:
            belong.append('')
        try:
            catBrand.append(fieldVal['Категория бренда'] if fieldVal['Категория бренда'] else '')
        except Exception:
            catBrand.append('')
        try:
            creators.append(fieldVal['Основатели:'] if fieldVal['Основатели:'] else '')
        except Exception:
            creators.append('')
        try:
            yearCreate.append(fieldVal['Год основания:'] if fieldVal['Год основания:'] else '')
        except Exception:
            yearCreate.append('')
        time.sleep(2)
        tmp = browser.find_element(By.CLASS_NAME, 'col-lg-9').find_elements(By.TAG_NAME, 'p')
        strDesc = ''
        tmp.pop(0)
        for a in tmp:
            strDesc = strDesc + a.text

        descriptions.append(strDesc)

        tmp = browser.find_elements(By.CLASS_NAME, 'mark-model')
        masModels = []
        for a in tmp:
            title = a.find_element(By.TAG_NAME, 'h2').text
            dd = a.find_elements(By.TAG_NAME, 'dd')
            generations = dd.pop(0).text
            cls = dd.pop(0).text
            body = dd.pop(0).text
            generations = generations[0:generations.find(' ')]

            years = a.text
            years = years[years.find(title) + len(title) + 1:years.find('\n')]
            photo = a.find_element(By.TAG_NAME, 'img').get_attribute('src')
            masModels.append({'title': title, 'body': body, 'class': cls, 'generations': generations, 'photo': photo,
                              'years': years})
        models.append(masModels)
    import json

    data = {}
    for i in range(len(h1)):
        data[h1[i]] = {
            'name': h1[i],
            'logo' : logo[i],
            'info': {
                'about': descriptions[i],
                'belong': belong[i],
                'category': catBrand[i],
                'founders': creators[i],
                'yearCreation': yearCreate[i]
            },
            'models': [models[i][j] for j in range(len(models[i]))]
        }
    print(data)
    with open("data_file.json", "w", encoding="utf-8") as write_file:
        json.dump(data, write_file, ensure_ascii=False, indent=4)
    print(descriptions)

    print(belong)
    print(catBrand)
    print(creators)
    print(yearCreate)

    print(models)
