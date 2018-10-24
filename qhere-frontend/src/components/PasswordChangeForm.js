import React ,{Component} from 'react'
import {Form,Button} from 'semantic-ui-react'
 class PasswordChangeForm extends Component{

    render(){
        return(
            <div>
                <Form style={style.Form}>
                    <Form.Field >
                    <label style={style.Label}>Old Password</label>
                    <input placeholder='Old Password' />
                    </Form.Field>
                    <Form.Field>
                    <label style={style.Label}>New Password</label>
                    <input placeholder='New Password' />
                    </Form.Field>
                    <Form.Field>
                    <label style={style.Label}>Confirm New Password</label>
                    <input placeholder='Confirm New Password' />
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button type='submit'>Update Password</Button>
                </Form>
            </div>
        )
    }

 }

 const style={
     Form:{
         margin:'auto',
         width:450
     },
     Label:{
         float:'Left',
         marginLeft:15
     }
 }

 export default PasswordChangeForm;