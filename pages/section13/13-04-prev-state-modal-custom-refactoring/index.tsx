import { Modal } from 'antd'
import { useState } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';
export default function ModalCustomPage(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)
    
    const onToggleModal = (): void => {
        setIsOpen((prev) => !prev)
    }

    const handleComplete = (data: Address): void => {
        console.log(data)
        onToggleModal()
    }

    return (
        <>
            <button onClick={onToggleModal}>모달창 열기!!</button>

            {/* 모달 종료 방식 - 1. 모달 숨기는 방법(ex, 이력서 등)*/}
            <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
            <DaumPostcodeEmbed onComplete={handleComplete}/>
            </Modal>

            {/* 모달 종료 방식 - 2. 모달 삭제하는 방법(ex, 신용카드, 비멀번호 등) */}
            {isOpen && (
                <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
                    <DaumPostcodeEmbed onComplete={handleComplete}/>
                </Modal>
            )}
        </>
    )
}