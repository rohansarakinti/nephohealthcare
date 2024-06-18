import { Paper } from '@mui/material'
//<img src={item.image} alt={item.title} style={{width:'100%',height:'80vh', objectFit:'cover', objectPosition:'top'}}/>

function Item({item})
{
    return (
        <Paper >
        
            <img src={item.image} alt={item.title} style={{width:'100%',height:'100vh', objectFit:'cover', objectPosition:'top'}}/>
            

        </Paper>
    )
}

export default Item 