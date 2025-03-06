import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import './Fapp.css';


export default function Fapp() {
    const siblings = [
        { name: 'Saturina Rizal', image: '/Resources/Concepcion_Rizal.png' },
        { name: 'Paciano Rizal', image: '/Resources/Paciano_Rizal.png' },
        { name: 'Narcisa Rizal', image: '/Resources/Narcisa_Rizal.png' },
        { name: 'Olympia Rizal', image: '/Resources/Olympia_Rizal.png' },
        { name: 'Lucia Rizal', image: '/Resources/Lucia_Rizal.png' },
        { name: 'Maria Rizal', image: '/Resources/Maria_Rizal.png' },
        { name: 'Jose Rizal', image: '/Resources/rizal.png' },
        { name: 'Concepcion Rizal', image: '/Resources/Concepcion_Rizal.png' },
        { name: 'Josefa Rizal', image: '/Resources/Josefa_Rizal.png' },
        { name: 'Trinidad Rizal', image: '/Resources/Trinidad_Rizal.png' },
        { name: 'Soledad Rizal', image: '/Resources/Soledad_Rizal.png' },
    ];

    return (
        <main
            className="main-container"
            style={{
                backgroundImage: `url('/Resources/Fpic.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '150vh',
                width: '100%',
            }}> 
                
                <Box className="family-tree-page">
                <Paper elevation={0} className="family-tree-container" style={{ backgroundImage: `url('/Resources/bg.jpg')`, boxShadow: '10px 5px 5px black' }}>

                    <Typography variant="h3" className="family-tree-title">
                        FAMILY TREE
                    </Typography>

                    {/* Family Tree Structure */}
                    <Box className="tree-container" style={{
                        backgroundColor: 'trasparent',
                        backgroundSize: 'cover',
                        backgroundPosition:'center',
                        height: '100vh',
                        width: '100%',
                        padding: '20px'
                    }}>

                        {/* Parents Row */}
                        <div className="parents-row">
                            <div className="parent-node">
                                <img src="/Resources/Francisco_Mercado.png" alt="Francisco Rizal" />
                                <Typography variant="caption">Francisco Rizal Mercado</Typography>
                            </div>
                            <div className="parent-node">
                                <img src="/Resources/Teodora_Alonso.png" alt="Teodora Alonso" />
                                <Typography variant="caption">Teodora Alonso Realonda</Typography>
                            </div>
                        </div>

                        {/* Horizontal connector between parents */}
                        <div className="parent-connector"></div>

                        {/* Children Row */}
                        <div className="children-row">
                            {siblings.map((sibling, index) => (
                                <div className="child-node" key={index}>
                                    <img src={sibling.image} alt={sibling.name} />
                                    <Typography variant="caption">{sibling.name}</Typography>
                                </div>
                            ))}
                        </div>

                    </Box>
                </Paper>
            </Box>
        </main>
    );
};