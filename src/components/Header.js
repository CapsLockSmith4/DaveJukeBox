import '../index.css';
const Header = ({ title }) => {
    return (
        <header>
            <h1>Welcome { title } to <stong style={{color: 'green'}}>Dave's Juke Box</stong> </h1>
        </header>
    )
}

export default Header
