import React, { useState } from 'react';
import { Modal, Steps } from 'antd';
const { Step } = Steps;
function DetailsBox() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <a onClick={showModal}>详情</a>
            <Modal
                title="详情"
                style={{ top: 200 }}
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={'650px'}
                className={'details-box-modal'}
                footer={null}
            >
                <Steps current={2}>
                    <Step title="数据加载" />
                    <Step title="数据预处理" />
                    <Step title="模型训练" />
                </Steps>
            </Modal>
        </>
    );
}

export default DetailsBox;
