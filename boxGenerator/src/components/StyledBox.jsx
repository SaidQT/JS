
import styled from 'styled-components';
 
const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.backGroundColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`;
 
export default StyledBox;