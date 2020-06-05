import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const Table = styled.table`
    transition: all 0.25s ease;
    width: 100%;
    td {
        word-break: break-all;
    }
`

function LeaderboardLayout(props) {
    const [fetchedData, setFetchedData] = useState([])  
    useEffect(() => {
        fetch('https://api.cryptichunt.com/leaderboard')
            .then(resp => resp.json())
            .then(res => setFetchedData(res))
    }, [])    
    return (
        <Layout>
            <h1>Leaderboard</h1>
            <p>Ctrl+F to search the registrations.</p>
            <Table>
                <tr>
                    <th>Username</th>
                    <th>Score</th>
                </tr>
                {fetchedData.map(({ username, points }) => (
                    <tr>
                        <td style={{ fontWeight: 'normal' }}>{username}</td>
                        <td style={{ fontWeight: 'normal' }}>{points}</td>
                    </tr>
                ))}
            </Table>
        </Layout>
    )
}

export default LeaderboardLayout