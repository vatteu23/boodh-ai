import { FC } from 'react'
import styled from 'styled-components';

type Props = {
    className?: string,
    onClick: () => void,
    darkMode?: boolean
}

const BurgerIcon:FC<Props> = ({ onClick, className, darkMode }) => {
    return (
        <Wrapper onClick={onClick} className={className+' dark-mode'}>
            <div id='one' />
            <div id='two' />
            <div id='three' />
        </Wrapper>
    )
}

export default BurgerIcon;

const Wrapper = styled.div`
    height: 22px;
    width: 30px;
    position: relative;

    &.dark-mode > div {
        background-color: white;
    }

    > div {
        height: 4px;
        width: 100%;
        background-color: black;
        position: absolute;
        left: 0;
        margin: auto;
        transition: .3s;

    }

    > div#one {
        top: 0;
    }

    > div#two {
        top: 0;
        bottom: 0;
    }

    > div#three {
        bottom: 0;
    }

    &.-open {
        > div#one {
            top: 40%;
            transform: rotate(45deg);
        }

        > div#two {
            opacity: 0;
        }

        > div#three {
            bottom: 40%;
            transform: rotate(-45deg);
        }
    }
`;