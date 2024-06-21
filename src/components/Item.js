import { Paper } from '@mui/material'

function Item({item})
{
    return (
        <Paper >
        
            <img src={item.image} alt={item.title} style={{background: 'linear-gradient(to right bottom, #000000, #000000)',width:'100%',height:'100vh', objectFit:'cover', objectPosition:'top',boxShadow: "0 0 8px 8px white inset"}}/>
        </Paper>
    )
}

export default Item 