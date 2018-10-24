import React ,{Component} from 'react';
import { Button, Form } from 'semantic-ui-react';
class CreateClassForm extends Component{

    render(){
        return(
            <div>
                <Form style={style.CreateClassForm}>
                    <Form.Field>
                    <label>Class Name</label>
                    <input 
                    placeholder='Class Name' />
                    </Form.Field>
                    <Form.Field>
                    <label>Join Time</label>
                    <input 
                    placeholder='Join Time' />
                    </Form.Field>
                    <Form.Field>
                    <label>Quota</label>
                    <input 
                    placeholder='Quota' />
                    </Form.Field>
                    <Form.Field>
                    <label>Discontinuity</label>
                    <input 
                    placeholder='Discontinuity' />
                    </Form.Field>
                    <Form.Field>
                    <label>Description</label>
                    <input 
                    placeholder='Description' />
                    </Form.Field>
                    <Button type='submit'>Kayıt</Button>
                </Form>
            </div>
        )
    }

}

const style={
    CreateClassForm:{
        margin:'auto',
        marginTop:50,
        width: 500
    },
    Message:{
        marginTop:20
    }
}

export default CreateClassForm;