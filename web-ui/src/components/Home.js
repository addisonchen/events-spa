import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';


function Home({users, meetings}) {
    return (
        <div className="margin padding">
            <Row>
                <Col>
                    <Row>
                        <h1>Meetings Planner V2</h1>
                    </Row>
                    <Row>
                        <p>New and improved with a Phoenix server backend and React frontend</p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <div style={{height: "20px"}}></div>
            </Row>
            <Row>
                <Col md={6}>
                    <h2>Meetings</h2>
                    {
                        console.log(meetings)
                    }
                </Col>
                <Col md={6}>
                    <h2>Users</h2>
                    {
                        console.log(users)
                    }
                </Col>
            </Row>

        </div>
    )
}

export default connect(({users, meetings}) => ({users, meetings}))(Home);