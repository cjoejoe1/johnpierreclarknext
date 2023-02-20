import {TbAugmentedReality} from 'react-icons/tb'
import Link from 'next/link'

const Header = () => {
  return (
    <div style={{marginBottom: 30,}}>
    <Link href={'/'} style={{textDecoration: 'none', cursor: 'pointer'}}>

    <h6 style={{fontSize: 27, marginTop: 15,  color: 'black', cursor: 'pointer', fontWeight: 700}}>John-Pierre Clark</h6>


</Link>
<a href="https://www.linkedin.com/in/johnpierreclark/" rel="noreferrer"  target="_blank">Linkedin</a>
</div>
  )
}

export default Header