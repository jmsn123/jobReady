import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --poppins: 'Poppins', sans-serif;
    --sans: 'Open Sans', sans-serif;
    --green: #72b626;
    --black: #111;
    --nero: #252525;
    --transition: all 0.4s ease;
}
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: var(--sans);
}
body{
    color: #fff;
    line-height: 1.5;
    background: var(--black);
    overflow-x: hidden;
}
a{
    color: #fff;
    text-decoration: none;
}
img{
    width: 100%;
    display: block;
}
ul li{
    list-style-type: none;
}
h1, h2, h3, h4, h5, h6, p{
    padding: 0.6rem 0;
}

/* button */
.btn{
    border: none;
    margin: 1rem 0;
    border-radius: 35px;
    background: var(--green);
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    display: inline-block;
    cursor: pointer;
    transition: var(--transition);
}
.btn:hover{
    opacity: 0.7;
}

.text{
    font-size: 1.05rem;
    color: #d0d0d0;
    line-height: 1.7;
}

/* title */
.title{
    position: relative;
}
.title > h2{
    font-size: 3rem;
    font-family: var(--poppins);
    text-align: center;
    text-transform: capitalize;
    font-weight: 900;
    color: var(--nero);
}
.title div{
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    width: 100%;
    transform: translate(-50%, -50%);
}
.title div h2{
    text-transform: capitalize;
    font-size: 2rem;
    font-family: var(--poppins);
    font-weight: 800;
}
.container{
   
}

@media screen and (min-width: 500px){
    .title > h2{
        font-size: 6rem;
    }
    .title div h2{
        font-size: 3rem;
    }
}

@media screen and (min-width: 992px){
    .container{
        width: 88vw;
    }
}
@media screen and (min-width: 1200px){
    .container{
        width: 85vw;
    }
}

/* animation and transition stopper styling */
.resize-animation-stopper *{
    animation: none !important;
    transition: none !important;
}`;
