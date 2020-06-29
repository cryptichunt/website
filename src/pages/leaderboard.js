import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

import users from '../../data/leaderboard'

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
  return (
    <Layout>
      <SEO title="Leaderboard" />
      <Leaderboard>
        <h1>Leaderboard</h1>
        <p>Ctrl+F to search the users.</p>
        <Table>
          <tbody>
            <tr>
              <th>RANK</th>
              <th>USERNAME</th>
            </tr>
            {users.map((username, i) => (
              <tr key={username}>
                <td style={{ fontWeight: 'normal' }}>{i + 1}</td>
                <td style={{ fontWeight: 'normal' }}>{username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Leaderboard>
    </Layout>
  )
}

export default LeaderboardLayout
