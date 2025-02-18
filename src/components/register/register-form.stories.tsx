import { Meta,StoryObj} from "@storybook/react";
import RegisterForm from "./register-form";
import { userEvent, within } from "@storybook/test";

export default {
    title: 'Components/Register',
    component: RegisterForm,
    tags: ['autodocs']
} as Meta<typeof RegisterForm>

type Story=StoryObj <typeof RegisterForm>

export const Default:Story ={

    play: async({canvasElement}) =>{

        const canvas = within(canvasElement);
        
        const userInput = canvas.getByLabelText('Username',{
            selector: 'input',
        })

        await userEvent.type(userInput, 'welcome');

        const emailInput = canvas.getByLabelText('Email',{
            selector: 'input',
        })

        await userEvent.type(emailInput, 'email@gmail.com');


        const password  = canvas.getByLabelText('Password', {
            selector: 'input',
        })

        await userEvent.type(password, '@Abc134');

        const confirmPassword = canvas.getByLabelText('Confirm Password', {
            selector: 'input'
        })

        await userEvent.type(confirmPassword, '@Abc134');

        const submitButton = canvas.getByRole('button');

        await userEvent.click(submitButton);
    }
}