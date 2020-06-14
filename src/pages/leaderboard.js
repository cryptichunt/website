import React, { useState, useEffect } from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Leaderboard = styled.div`
  color: #eee;
`

const Table = styled.table`
  width: 100%;
  th {
    color: #ee3769;
  }
  td {
    word-break: break-all;
  }
`

function LeaderboardLayout(props) {
  const [fetchedData, setFetchedData] = useState([])
  useEffect(() => {
    fetch("https://api.cryptichunt.com/leaderboard")
      .then(resp => resp.json())
      .then(res => setFetchedData(res))
  }, [])
  return (
    <Layout>
      <SEO title="Leaderboard" />
      <Leaderboard>
        <h1>Leaderboard</h1>
        <p>Ctrl+F to search the registrations.</p>
        <Table>
          <tr>
            <th>USERNAME</th>
            <th>SCORE</th>
          </tr>
          {fetchedData.map(({ username, points }) => (
            <tr>
              <td style={{ fontWeight: "normal" }}>{username}</td>
              <td style={{ fontWeight: "normal" }}>{points}</td>
            </tr>
          ))}
        </Table>
      </Leaderboard>
    </Layout>
  )
}

export default LeaderboardLayout
