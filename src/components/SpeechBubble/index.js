import * as Styled from './style';

export default function SpeechBubble({children, onClick}) {
    
    return (
        <Styled.Container
        className='SpeechBubble'
        onClick={onClick}
        >
            {children}
        </Styled.Container>
    )
}
