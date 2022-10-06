import styled from 'styled-components';

export const VideoWrapper = styled.video`
outline: none;
 width: 500px;
 height: 400px;
 border: 1px solid transparent;
 border-radius: 10px;
 @media(max-width: 768px){
   width: 100%;
 }
 :focus{
   outline: none;
 }
 `
