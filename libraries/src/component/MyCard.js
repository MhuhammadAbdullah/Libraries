import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const MyCard = () => {
    return (
        <div style={{ padding: 20, display: 'flex', justifyContent: 'center' }}>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={
                    <img
                        alt="Example"
                        src="https://picsum.photos/300/200"
                    />
                }
            >
                <Meta title="Ant Design Card" description="Yeh ek simple AntD card hai." />
            </Card>
        </div>
    );
};

export default MyCard;
