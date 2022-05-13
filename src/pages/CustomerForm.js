import axios from 'axios';
import {
    Container,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text
} from '@chakra-ui/react'
import {useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const CustomerForm = () => {
    let navigate = useNavigate(); 
    const {
        handleSubmit,
        register
    } = useForm();
   
    const onSubmit = (e) => {
        let path = `/CustomerDetails`; 
        navigate(path);
        console.log(e);
        axios.post('https://jsonplaceholder.typicode.com/posts', e)
            .then(res =>
            { console.log(res) })
            
            .catch(error =>
            { console.log(error) });
    }

    return (
        <div>
            <Container>
            <Text fontSize='4xl'>Customer's Login</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                type='email'
                placeholder="email"
                {...register("email", {
                  required: true
                })}
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: true
                })}
                />
            </FormControl> <br />
            <Button colorScheme='white' bg="tomato" width='70%'  type="submit">Submit
            </Button>
            
          </form>
            </Container>
        </div>
    );
};

export default CustomerForm;