import React from 'react'
import Item from './Item'
import Products from './Products'
import SampleOutput from "./SampleOutput.json"
import {
    Card, CardBody, CardImg, CardTitle, Col, Row, CardHeader, Form
} from "reactstrap"
const Details = () => {
    return (
        <div>
            <Col >
                <Card className="card">
                    <CardHeader>
                        <CardTitle tag="h3">About</CardTitle>
                    </CardHeader>

                    {SampleOutput.map(post => {
                        return (
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <label>Title: {post.title}</label>
                                        </Col>
                                        <Row>
                                            <Row>
                                                <Col className="pl-1" md="6">
                                                    <label>iD: {post.pageid}</label>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="pl-1" md="6">
                                                    <label> Size:{post.size}</label>
                                                </Col>
                                            </Row>
                                            <Col className="pl-1" md="6">
                                                <label>Snippet: {post.snippet}</label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pl-1" md="6">
                                                <label>{post.timestamp} </label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pl-1" md="6">
                                                <label>Domain :  {post.domain}</label>
                                            </Col>
                                        </Row>

                                    </Row>
                                </Form>
                            </CardBody>
                        )
                    })}
                </Card>
            </Col>
        </div>
    )
}

export default Details
