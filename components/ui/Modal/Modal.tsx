import React, { ReactNode } from 'react'

function CardModal(props: { extraClass?: string, children: ReactNode, show: boolean, handleModalClose: () => void }) {

    return (props.show ?
        <div className="modal-wrapper absolute top-0 left-0 w-screen h-screen bg-[#00000080] flex justify-center items-center ">
            <div className={` bg-white rounded-lg flex justify-between py-2 flex-col ${props.extraClass} p-4 lg:px-10 lg:py-6 gap-y-4 relative`}>
                <>
                    {props.children}
                </>
                <button onClick={props.handleModalClose} className='absolute top-2 right-3 bg-[#E5E5E5] rounded-full h-6 w-6 flex justify-center items-center font-semibold'>x</button>
            </div>
        </div> : null

    )
}

export default CardModal