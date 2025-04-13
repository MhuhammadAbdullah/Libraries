import React from 'react';
import { Button, Modal, Spin } from 'antd';

const App = () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simulate loading delay
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <Button type="primary" onClick={showLoading}>
                Open Modal
            </Button>
            <Modal
                title={<p>Loading Modal</p>}
                footer={
                    <Button type="primary" onClick={showLoading}>
                        Reload
                    </Button>
                }
                open={open}
                onCancel={() => setOpen(false)}
            >
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <Spin size="large" />
                    </div>
                ) : (
                    <>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </>
                )}
            </Modal>
        </>
    );
};

export default App;
