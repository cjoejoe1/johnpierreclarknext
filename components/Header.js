import {TbAugmentedReality} from 'react-icons/tb'
import Link from 'next/link'

const Header = () => {
  return (
    <div style={{marginBottom: 30,}}>
    <Link href={'/'} style={{textDecoration: 'none', cursor: 'pointer'}}>

    <h6 style={{fontSize: 27, marginTop: 15,  color: 'black', cursor: 'pointer'}}>John-Pierre Clark</h6>

</Link>
</div>
  )
}

export default Header