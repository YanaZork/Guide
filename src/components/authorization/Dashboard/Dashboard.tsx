import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../../api/implementation/firebase/firebaseApp";
import { query, collection, getDocs, where } from "firebase/firestore";


const Box = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
  }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #dcdcdc;
    padding: 30px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    border: none;
    color: white;
    background-color: black;
  &.google {
    background-color: #4285f4;
  }
`;


function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);
    return (
        <Box>
            Dashboard
            <Container>
                Вы вошли в систему как
                <div>{name}</div>
                <div>{user?.email}</div>
                <Button onClick={logout}>
                    Выход из системы
                </Button>
            </Container>
        </Box>
    );
}
export default Dashboard;