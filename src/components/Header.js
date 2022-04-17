import './Header.css'
import { IoIosLogOut } from 'react-icons/io'

export default function Header({handleOut}) {

    const onOutClicked = () => {
        console.log("hi")
        sessionStorage.setItem('authed', null)
        handleOut(false)
    }

    return(
        <div className="header flex-horizontal space-between">
            <h1 className="header-sign">
                Simple Hotel Check
            </h1>
            <div className='flex-horizontal align-center justify-center button' onClick={onOutClicked}>
                <h1 className='header-exit-text margin-0 margin-right-15'>
                    Выйти
                </h1>
                <h1 className='header-out-pic header-exit-text margin-0'>
                    <IoIosLogOut width={18} height={18}/>
                </h1>
            </div>
        </div>
    )
}