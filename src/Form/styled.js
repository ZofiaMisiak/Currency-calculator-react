import styled from "styled-components";

export const StyledForm = styled.form`
 flex-basis:300px;
 `;


export const Fieldset = styled.fieldset`
    border: 1px solid rgb(243, 134, 134);
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
    background-color: rgba(249, 192, 239, 0.869);
    flex-basis:300px;
`;

export const Legend = styled.legend`
    background-color: #df2c68;
    border-radius: 5px;
    padding: 10px;
    color: rgb(255, 255, 255);
    font-weight:normal;
    margin: auto;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin: 5px 5px 5px 0;
    padding: 5px 5px 5px 0;
`;

export const Field = styled.input`
    width: 100%;
    max-width: 250px;
    border: 1px solid rgb(6, 6, 6);
    border-radius: 5px;
    padding: 5px;
    font-size:medium;
`;


export const Button = styled.button`
    padding: 10px;
    width: 100%;
    background-color: rgb(237, 100, 232);
    border: none;
    border-radius: 7px;
    color: rgb(250, 245, 245);
    font-weight: bold;

&:hover {
    background-color: rgb(174, 9, 125);
};

&:active {
 back;ground-color: rgb(71, 17, 189);
};
`;


export const AdditionalInformation = styled.p`
    margin: 5px;
    font-style:oblique;
    margin: auto;
    font-size: smaller;
`;