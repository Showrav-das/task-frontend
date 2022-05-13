import {
    Container,
    FormControl,
    FormLabel,
    Select,
    Text,
    Input,
    Button
} from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import axios from 'axios';

const CustomerDetails = () => {

    const {
        handleSubmit,
        register
    } = useForm();

    const onSubmit = (e) => {
        console.dir(e);
        axios.post('https://jsonplaceholder.typicode.com/posts', e)
            .then(res => console.log(res))

            .catch(error => console.log(error));
    }
    return (
        <div>
            <Container>
               <Text fontSize='4xl'>Customer's Details Form</Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Name">Name</FormLabel>
                        <Input
                            id="name"
                            type='text'
                            placeholder="name"
                            {...register("name", {
                                required: true
                            })}
                        />
                        <FormLabel htmlFor="password">Age</FormLabel>
                        <Input
                            placeholder="Age"
                            type="number"
                            {...register("age", {
                                required: true
                            })}
                        />
                        <FormLabel>District</FormLabel>
                        <Input
                            placeholder="District"
                            type="text"
                            {...register("District", {
                                required: true
                            })}
                        />
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                            placeholder="Phone Number"
                            type="number"
                            {...register("number", {
                                required: true
                            })}
                        />
                        <FormLabel>Gender</FormLabel>
                       
                        <Select {...register("gender", {
                                required: true
                            })}>
                            <option selected>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </Select>
                        
                    </FormControl> <br />
                    <Button colorScheme='white' bg="tomato" width='70%' type="submit">Submit
                    </Button>

                </form>
            </Container>
        </div>
    );
};

export default CustomerDetails;