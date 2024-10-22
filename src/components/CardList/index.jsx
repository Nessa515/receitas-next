'use client'
import { useEffect, useState } from "react";
import Card from "../Card";

export default function CardList(){

    const [cards, setCards] = useState([
        // {id: 1, titulo: "Ovo com arroz e pepino", imagem: "ovo-1.png", tempo: 25, serve: 2},
        // {id: 2, titulo: "Ovo mexido",             imagem: "ovo-2.png", tempo: 20, serve: 2},
        // {id: 3, titulo: "Ovo com macarrão",       imagem: "ovo-3.png", tempo: 15, serve: 1},
        // {id: 4, titulo: "Pão com ovo",            imagem: "ovo-4.png", tempo: 10, serve: 1},
    ]);

    useEffect(() => {

        const bearerToken = process.env.NEXT_PUBLIC_API_TOKEN

        async function getData() {
            await fetch("http://localhost:1337/api/receitas", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application-json'
                }
            })
                .then(response => response.json(response))
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
        }
        getData()

    }, [])

    return(
        <div className="flex flex-wrap flex-col m-8">
            <div className="flex flex-wrap">
                {cards.map(c => (
                    <Card
                        key = {c.id}
                        imagem = {c.imagem}
                        titulo = {c.titulo}
                        tempo = {c.tempo}
                        serve = {c.serve}
                    />
                ))}
            </div>
        </div>
    )
}