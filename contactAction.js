import { techSpecActionTypes } from '../../constants/actionTypes';
import { mergeobjects,mergeArray, isEmpty } from '../../../utils/commonUtils';

const actions = {
    UpdateContactInformation: (payload) => ({
        type: techSpecActionTypes.contactInformationActionTypes.UPDATE_CONTACT_INFORMATION,
        data: payload
    }),
    UpdateContact: (payload) => ({
        type: techSpecActionTypes.contactInformationActionTypes.UPDATE_CONTACT,
        data: payload
    }),
};
export const UpdateContactInformation = (data) => (dispatch, getstate) => {
    debugger;
    const state = getstate();
    const modifiedData = mergeobjects(state.RootTechSpecReducer.TechSpecDetailReducer.selectedProfileDetails.TechnicalSpecialistInfo, data);
    dispatch(actions.UpdateContactInformation(modifiedData));
};
export const UpdateContact = (data) => (dispatch, getstate) => {
    debugger;
    const state = getstate();
    let updatedArray=[];
    const oldArray = state.RootTechSpecReducer.TechSpecDetailReducer.selectedProfileDetails.TechnicalSpecialistContact;
    if(!isEmpty(oldArray)){
     updatedArray = oldArray.map(item=>{        
            if(item.contactType === 'PrimaryAddress'){
            item.address = data.PrimaryAddress.address;
            item.country = data.PrimaryAddress.country;
            item.county = data.PrimaryAddress.county;
            item.city = data.PrimaryAddress.city;
            item.postalCode = data.PrimaryAddress.postalCode;
            if(item.recoardStatus !== 'N'  && data.PrimaryAddress.address !== ''){
               item.recoardStatus = 'M';
            }else{
                item.recoardStatus = 'D';
             }              
            }
            if(item.contactType === 'PrimaryEmail'){
                item.emailAddress = data.PrimaryEmail.emailAddress;
                if(item.recoardStatus !== 'N'  && data.PrimaryEmail.emailAddress !== ''){
                   item.recoardStatus = 'M';
                }else{
                    item.recoardStatus = 'D';
                 }              
           }
           if(item.contactType === 'SecondaryEmail'){
                    item.secondaryEmailAddress = data.SecondaryEmail.secondaryEmailAddress;
                if(item.recoardStatus !== 'N'  && data.SecondaryEmail.secondaryEmailAddress !== ''){
                   item.recoardStatus = 'M';
                }else{
                    item.recoardStatus = 'D';
                 }              
       } if(item.contactType === 'PrimaryMobile'){
                    item.mobileNumber = data.PrimaryMobile.mobileNumber;
                if(item.recoardStatus !== 'N'  && data.PrimaryMobile.mobileNumber !== ''){
                   item.recoardStatus = 'M';
                }else{
                    item.recoardStatus = 'D';
                 }              
       } if(item.contactType === 'PrimaryPhone'){
                    item.telePhoneNumber = data.PrimaryPhone.telePhoneNumber;
                if(item.recoardStatus !== 'N'  && data.PrimaryPhone.telePhoneNumber !== ''){
                   item.recoardStatus = 'M';
                }else{
                    item.recoardStatus = 'D';
                 }              
       } 
            if(item.contactType === 'Emergency'){
                item.emergencyContactName = data.Emergency.emergencyContactName;
                if(item.recordStatus !== 'N' && data.Emergency.emergencyContactName !== '' ){
                item.recoardStatus = 'M';
                }else{
                item.recoardStatus = 'D';
                }                
        }
        if(item.contactType === 'Fax'){
                item.faxNumber = data.Fax.faxNumber;
                if(item.recordStatus !== 'N' && data.Fax.faxNumber !== '' ){
                item.recoardStatus = 'M';
                }else{
                item.recoardStatus = 'D';
                }                
        }
           return item;
       });
    }else{
        debugger;
        const newContact ={
            "id":  Math.floor(Math.random() * (Math.pow(10, 5))),
            "epin":null,
            "address": null,
            "country": null,
            "county": null,
            "city": null,
            "postalCode":null,
            "mobileNumber": null,
            "telephoneNumber": null,
            "emergencyContactName": null,
            "emailAddress": null,
            "faxNumber": null,
            "displayOrder": null,
            "contactType": null,
            "updateCount": null,
            "recordStatus": 'N',
            "lastModification": null,
            "modifiedBy": null
        };
        debugger;
        if(data.PrimaryEmail.emailAddress!=='' && data.PrimaryEmail.emailAddress !== undefined){
            newContact['contactType']="PrimaryEmail";
            newContact['emailAddress']=data.PrimaryEmail.emailAddress;
            updatedArray.push(newContact);
        }
        
        if(data.SecondaryEmail.secondaryEmailAddress!=='' && data.SecondaryEmail.secondaryEmailAddress !== undefined){
            newContact['contactType']='SecondaryEmail';
            newContact['secondaryEmailAddress']=data.SecondaryEmail.secondaryEmailAddress;
            updatedArray.push(newContact);
        }
        if(data.PrimaryMobile.mobileNumber!=='' && data.PrimaryMobile.mobileNumber !== undefined){
            newContact['contactType']='PrimaryMobile';
            newContact['mobileNumber']=data.PrimaryMobile.mobileNumber;
            updatedArray.push(newContact);
        }
        if(data.PrimaryPhone.telePhoneNumber!=='' && data.PrimaryPhone.telePhoneNumber !== undefined){
            newContact['contactType']='PrimaryPhone';
            newContact['telePhoneNumber']=data.PrimaryPhone.telePhoneNumber;
            updatedArray.push(newContact);
        }
        if((data.Emergency.emergencyContactName!=='' && data.PrimaryPhone.emergencyContactName !== undefined) || (data.Emergency.telephoneNumber!=='' && data.PrimaryPhone.telephoneNumber)){
            newContact['contactType']='Emergency';
            newContact['emergencyContactName']=data.Emergency.emergencyContactName!==undefined ? data.Emergency.emergencyContactName : null ;
            newContact['telephoneNumber']=data.Emergency.telephoneNumber !== undefined ? data.Emergency.telephoneNumber : null;
            updatedArray.push(newContact);
        }
        if((data.PrimaryAddress.country!=='' && data.PrimaryAddress.country !== undefined) || (data.PrimaryAddress.county!=='' && data.PrimaryAddress.county)){
            newContact['contactType']='PrimaryAddress';
            newContact['country']=data.PrimaryAddress.country;
            newContact['county']=data.PrimaryAddress.county !== undefined ? data.PrimaryAddress.county : null;
            newContact['city']=data.PrimaryAddress.city !== undefined ? data.PrimaryAddress.city : null;
            newContact['postalCode']=data.PrimaryAddress.postalCode !== undefined ? data.PrimaryAddress.postalCode : null;
            newContact['address']=data.PrimaryAddress.address !== undefined ? data.PrimaryAddress.address : null;
            updatedArray.push(newContact);
        }
        // if(data.Fax.contactType === 'Fax'){
        //     newContact['contactType']=data.Fax.contactType;
        //     newContact['faxNumber']=data.Fax.faxNumber;
        //     updatedArray.push(newContact);
        // }
        
    }
    
    //const modifiedData = mergeArray(state.RootTechSpecReducer.TechSpecDetailReducer.selectedProfileDetails.TechnicalSpecialistContact);
    dispatch(actions.UpdateContact(updatedArray));
};