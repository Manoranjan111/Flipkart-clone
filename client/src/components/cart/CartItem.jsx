import { Box, Typography, Button, styled } from "@mui/material";
import { useDispatch } from "react-redux";

// CUSTOM COMPONENETS
import { addElipsis } from "../../utils/common-utils";
import  ButtonGroup from './ButtonGroup';
import { removeFromCart } from "../../redux/actions/cartActions";


const Component = styled(Box)`
    border-top: 1 px solid #f0f0f0;
    display: flex;
    background: #fff;
`;
const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;
const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 5px;
`;
const RemoveButton = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000000;
    font-weight: 600;
` 


const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart = ( id ) => {
        dispatch( removeFromCart(id) )
    };


    return(
       <Component>
            <LeftComponent>
                <img src={item.url} alt="product" style={{ width: 110, height: 110 }} />
                <ButtonGroup />
            </LeftComponent>
            <Box style={{margin: 20}}>
                <Typography> {addElipsis(item.title.longTitle)} </Typography>
                <SmallText>Seller: RetailNet
                    <box component='span'><img src={fassured} style={{width: 50, marginLeft: 10}}  alt="flipkart-assured" /></box>
                </SmallText>

                <Typography style={{margin: '10px 0',fontSize: 18 }}>
                    <Box component='span' style={{ fontWeight: 600 }}>
                    ₹{item.price.cost}
                    </Box>&nbsp; &nbsp;
                    <Box component='span' style={{color: '#878787' }}>
                        <strike>₹{item.price.mrp}</strike>
                    </Box>&nbsp;&nbsp;
                    <Box component='span' style={{color: '#388E3C'}}>
                        {item.price.discount}
                    </Box>
                </Typography>
                <RemoveButton onClick={ () => removeItemFromCart(item.id) } >Remove</RemoveButton>
                
            </Box>
       </Component> 
    )
}

export default CartItem;