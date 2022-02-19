import React from "react";
import {Row, Col, Image} from 'antd'

export default function CoinListItems(props){
    return (
        <>
            <Row justify="center">
                <Col span={6}>
                    <Image
                        preview={false}
                        src={props.img} 
                    />
                </Col>
                <Col span={6}>
                    {props.name}
                </Col>
                <Col span={6}>
                    {props.symbol}
                </Col>
                <Col span={6}>
                    {props.marketCap}
                </Col>
            </Row>
        </>
    )
}