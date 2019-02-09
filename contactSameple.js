import React, { Component, Fragment } from 'react';
import CardPanel from '../../../../common/baseComponents/cardPanel';
import CustomInput from '../../../../common/baseComponents/inputControlls';
import { getlocalizeData, isEmpty, mapArrayObject, formInputChangeHandler, customRegExValidator,isUndefined } from '../../../../utils/commonUtils';
import dateUtil from '../../../../utils/dateUtil';
import moment from 'moment';
import IntertekToaster from '../../../../common/baseComponents/intertekToaster';
import CustomModal from '../../../../common/baseComponents/customModal';
const localConstant = getlocalizeData();

const PersonalDetailsComponent = (props) => {
    return (
        <CardPanel className="white lighten-4 black-text" title={localConstant.techSpec.contactInformation.PERSONAL_DETAILS} colSize="s12">
            <div className="row mb-0">
                <div className="col s6 p-0" >
                    <CustomInput
                        hasLabel={true}
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.SALUTATION}
                        type='select'
                        colSize='s4'
                        className="browser-default"
                        optionName='name'
                        optionValue="name"
                        optionsList={props.salutationMasterData}
                        name='salutation'
                        defaultValue={props.contactInformationDetails.salutation}
                        onSelectChange={props.onChangeHandler} />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.FIRST_NAME}
                        type='text'
                        colSize='s8'
                        inputClass="customInputs"
                        labelClass="mandate"
                        maxLength={50}
                        name='firstName'
                        value={props.contactInformationDetails.firstName ? props.contactInformationDetails.firstName : ""}
                        dataValType='valueText'
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        autocomplete="off" />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.LAST_NAME}
                        type='text'
                        colSize='s12'
                        inputClass="customInputs"
                        labelClass="mandate"
                        maxLength={50}
                        name='lastName'
                        value={props.contactInformationDetails.lastName ? props.contactInformationDetails.lastName : ""}
                        dataValType='valueText'
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        autocomplete="off" />
                </div>
                <div className="col s6 p-0" >
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.MIDDLE_NAME}
                        type='text'
                        colSize='s12'
                        inputClass="customInputs"
                        maxLength={50}
                        name='middleName'
                        value={props.contactInformationDetails.middleName ? props.contactInformationDetails.middleName : ""}
                        dataValType='valueText'
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        autocomplete="off" />
                    <CustomInput
                        hasLabel={true}
                        isNonEditDateField={false}
                        labelClass="customLabel"
                        label={localConstant.techSpec.contactInformation.DOB}
                        onDatePickBlur={props.handleDOBDateBlur}
                        colSize='s12'
                        dateFormat={localConstant.techSpec.common.CUSTOMINPUT_DATE_FORMAT}
                        placeholderText={localConstant.techSpec.common.CUSTOMINPUT_DATE_FORMAT}
                        type='date'
                        selectedDate={props.contactInformationDetails.dateOfBirth ? moment(props.contactInformationDetails.dateOfBirth) : ''}
                        onDateChange={props.fetchDOB}
                        shouldCloseOnSelect={true}
                        name='dateOfBirth' />
                </div>
            </div>
        </CardPanel>
    );
};
const ContactDetailsComponent = (props) => {
    debugger;
    return (
        <CardPanel className="white lighten-4 black-text" title={localConstant.techSpec.contactInformation.CONTACT_DETAILS} colSize="s12">
            <div className="row mb-0" >
                <div className="col s6 p-0" >
                    <CustomInput
                        hasLabel={true}
                        divClassName='col loadedDivision '
                        label={localConstant.techSpec.contactInformation.MODE_OF_COMMUNICATION}
                        type='multiSelect'
                        colSize='s12 pr-0'
                        className="browser-default"
                        optionsList={props.modeOfCommunicationArray}
                        name='modeOfCommunication'
                        multiSelectdValue={props.getMultiSelectedValue}
                        defaultValue={props.contactInformationDetails.modeOfCommunication} />
                    <CustomInput
                        hasLabel={true}
                        type="text"
                        divClassName='col pr-0 mt-4'
                        label={localConstant.techSpec.contactInformation.MOBILE_NUMBER}
                        labelClass="mandate"
                        dataType='numeric'
                        //valueType='value'
                        colSize='s12'
                        inputClass="customInputs"
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        maxLength={10}
                        name='mobileNumber'
                        //value={props.contactDetails.PrimaryMobile !==undefined ? props.contactDetails.PrimaryMobile.mobileNumber : ""}
                        defaultValue={props.contactDetails.PrimaryMobile !==undefined ? props.contactDetails.PrimaryMobile.mobileNumber : ""}
                        autocomplete="off" />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.EMAIL}
                        type='email'
                        colSize='s12'
                        inputClass="customInputs"
                        labelClass="mandate"
                        maxLength={60}
                        name='emailAddress'
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        //value={props.contactDetails.PrimaryEmail !==undefined ? props.contactDetails.PrimaryEmail.emailAddress : ""}
                        defaultValue={props.contactDetails.PrimaryEmail !==undefined ? props.contactDetails.PrimaryEmail.emailAddress : ""}
                        valueType='value'
                        autocomplete="off"
                    />
                    <CustomInput
                        hasLabel={true}
                        type="text"
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.EMERGENCY_CONTACT_NUMBER}
                        dataType='numeric'
                        //valueType='value'
                        colSize='s12'
                        inputClass="customInputs"
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        maxLength={10}
                        name='telephoneNumber'
                        //value={props.contactDetails.Emergency !==undefined ? props.contactDetails.Emergency.telephoneNumber : ""}
                        defaultValue={props.contactDetails.Emergency !==undefined ? props.contactDetails.Emergency.telephoneNumber : ""}
                        autocomplete="off" />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.DRIVING_LICENSE_NUMBER}
                        type='text'
                        colSize='s12'
                        inputClass="customInputs"
                        name='drivingLicenseNo'
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.licenseInputhandler}
                        maxLength={20}
                        value={props.contactInformationDetails.drivingLicenseNo ? props.contactInformationDetails.drivingLicenseNo : ""}
                        dataValType='valueText'
                        autocomplete="off" />
                    {props.licenseFieldEnable === true ?
                        <CustomInput
                            hasLabel={true}
                            divClassName='col pr-0'
                            label={localConstant.techSpec.contactInformation.EXPIRY_DATE}
                            type='date'
                            placeholderText={localConstant.techSpec.common.CUSTOMINPUT_DATE_FORMAT}
                            colSize='s6'
                            inputClass="customInputs"
                            selectedDate={props.contactInformationDetails.drivingLicenseExpiryDate ?
                                moment(props.contactInformationDetails.drivingLicenseExpiryDate) : ''}
                            onDateChange={props.fetchLicenceExpiryDate}
                            dateFormat={localConstant.techSpec.common.CUSTOMINPUT_DATE_FORMAT}
                            onDatePickBlur={props.handleExpiryDateBlur}
                            labelClass="mandate"
                            name='drivingLicenseExpiryDate' />
                        : null}
                </div>
                <div className="col s6 p-0" >
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.CONTACT_COMMENTS}
                        type='textarea'
                        colSize='s12'
                        inputClass="customInputs"
                        maxLength={60}
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        disabled={true} />
                    <CustomInput
                        hasLabel={true}
                        type="text"
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.OTHER_PHONE_NUMBER}
                        dataType='numeric'
                        valueType='value'
                        colSize='s12'
                        inputClass="customInputs"
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        maxLength={10}
                        name='otherTelePhoneNumber'
                        value={props.contactDetails.PrimaryPhone !== undefined ? props.contactDetails.PrimaryPhone.telephoneNumber : ""}
                        autocomplete="off" />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.SECONDARY_EMAIL}
                        type='email'
                        colSize='s12'
                        inputClass="customInputs"
                        maxLength={60}
                        name='secondaryEmailAddress'
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        value={props.contactDetails.SecondaryEmail!==undefined ? props.contactDetails.SecondaryEmail.secondaryEmailAddress : ""}
                        valueType='value'
                        autocomplete="off"
                    />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.EMERGENCY_CONTACT_NAME}
                        type='text'
                        colSize='s12'
                        inputClass="customInputs"
                        maxLength={250}
                        name='emergencyContactName'
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        value={props.contactDetails.Emergency!==undefined ? props.contactDetails.Emergency.emergencyContactName : ""}
                        dataValType='valueText'
                        autocomplete="off" />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.PASSPORT_NUMBER}
                        type='text'
                        colSize='s12'
                        inputClass="customInputs"
                        name='passportNo'
                        maxLength={20}
                        onValueBlur={props.passportInputhandler}
                        onValueChange={props.onChangeHandler}
                        value={props.contactInformationDetails.passportNo ? props.contactInformationDetails.passportNo : ""}
                        dataValType='valueText'
                        autocomplete="off" />
                    {props.passportFieldEnable === true ?
                        <Fragment>
                            <CustomInput
                                hasLabel={true}
                                divClassName='col'
                                label={localConstant.techSpec.contactInformation.EXPIRY_DATE}
                                type='date'
                                colSize='s6'
                                inputClass="customInputs"
                                selectedDate={props.contactInformationDetails.passportExpiryDate ?
                                    moment(props.contactInformationDetails.passportExpiryDate) : ''}
                                onDateChange={props.fetchPassportExpiryDate}
                                dateFormat={localConstant.techSpec.common.CUSTOMINPUT_DATE_FORMAT}
                                placeholderText={localConstant.techSpec.common.CUSTOMINPUT_DATE_FORMAT}
                                onDatePickBlur={props.handleExpiryDateBlur}
                                labelClass="mandate"
                                name='passportExpiryDate' />
                            <CustomInput
                                hasLabel={true}
                                divClassName='col pl-0'
                                label={localConstant.techSpec.contactInformation.COUNTRY_OF_ORIGIN}
                                type='select'
                                colSize='s6'
                                inputClass="customInputs"
                                optionName="name"
                                optionValue="name"
                                labelClass="mandate"
                                optionsList={props.countryMasterData}
                                name='passportCountryName'
                                id='passportCountryName'
                                onSelectChange={props.onChangeHandler}
                                defaultValue={props.contactInformationDetails.passportCountryName} />
                        </Fragment>
                        : null}
                </div>
            </div>
        </CardPanel>
    );
};
const AddressComponent = (props) => {
    return (
        <CardPanel className="white lighten-4 black-text" title={localConstant.techSpec.contactInformation.ADDRESS} colSize="s12">
            <div className="row mb-0" >
                <div className="col s6 p-0" >
                    <CustomInput
                        hasLabel={true}
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.COUNTRY_OF_RESIDENCE}
                        type='select'
                        colSize='s12'
                        inputClass="customInputs"
                        labelClass="mandate"
                        optionsList={props.countryMasterData}
                        optionName="name"
                        optionValue="name"
                        onSelectChange={props.onChangeHandler}
                        name="country"
                        id="country"
                        defaultValue={props.contactDetails.PrimaryAddress!==undefined ? props.contactDetails.PrimaryAddress.country :''} />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.CITY}
                        type='select'
                        colSize='s12'
                        inputClass="customInputs"
                        optionsList={props.cityMasterData}
                        optionName="name"
                        optionValue="name"
                        onSelectChange={props.onChangeHandler}
                        name="city"
                        id="city"
                        defaultValue={props.contactDetails.PrimaryAddress !==undefined ? props.contactDetails.PrimaryAddress.city :''} />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.ZIP_POSTAL_code}
                        type='text'
                        colSize='s12'
                        inputClass="customInputs"
                        maxLength={15}
                        name='postalCode'
                        value={props.contactDetails.PrimaryAddress!==undefined ? props.contactDetails.PrimaryAddress.postalCode : ""}
                        dataValType='valueText'
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        autocomplete="off" />
                </div>
                <div className="col s6 p-0" >
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.STATE_PREFECTURE_PROVINCE}
                        type='select'
                        colSize='s12'
                        inputClass="customInputs"
                        labelClass="mandate"
                        optionsList={props.stateMasterData}
                        optionName="name"
                        optionValue="name"
                        onSelectChange={props.onChangeHandler}
                        name="county"
                        id="county"
                        defaultValue={props.contactDetails.PrimaryAddress!==undefined? props.contactDetails.PrimaryAddress.county :''} />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.STREET_ADDRESS}
                        type='text'
                        colSize='s12'
                        inputClass="customInputs"
                        labelClass="mandate"
                        maxLength={500}
                        name='address'
                        value={props.contactDetails.PrimaryAddress!==undefined ? props.contactDetails.PrimaryAddress.address : ""}
                        dataValType='valueText'
                        onValueChange={props.onChangeHandler}
                        onValueBlur={props.onblurHand}
                        autocomplete="off" />
                </div>
            </div>
        </CardPanel>
    );
};
const LoginCredentialsComponent = (props) => {
    return (
        <CardPanel className="white lighten-4 black-text" title={localConstant.techSpec.contactInformation.LOGIN_CREDENTIALS} colSize="s12">
            <div className="row mb-0" >
                <div className="col s6 p-0">
                    <CustomInput
                        hasLabel={true}
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.USER_NAME}
                        type='text'
                        colSize='s12'
                        inputClass="customInputs"
                        labelClass="mandate"
                        maxLength={60}
                        defaultValue='templeColin123'
                        name='username'
                        onValueChange={props.onChangeHandler}
                        disabled={true} />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col pr-0'
                        label={localConstant.techSpec.contactInformation.PASSWORD_SECURITY_QUESTION}
                        type='select'
                        colSize='s12'
                        className="browser-default"
                        optionName="value"
                        optionValue="value"
                        onSelectChange={props.onChangeHandler}
                        optionsList={props.passwordSecurityQuestionArray}
                        name='passwordSecurityQuestion'
                        disabled={true} />
                </div>
                <div className="col s6 p-0">
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.PASSWORD}
                        type={props.passwordToggle ? 'text' : 'password'}
                        dataTypePassword='text'
                        colSize='s12'
                        inputClass="customInputs"
                        labelClass="mandate"
                        maxLength={60}
                        defaultValue='Password@123'
                        showPasswordToggle={props.passwordToggleHandler}
                        id="password"
                        name='password'
                        isVisable={props.passwordToggle}
                        onValueBlur={props.onChangeHandler}
                        disabled={true} />
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.PASSWORD_ANSWER}
                        type={props.passwordAnswerToggle ? 'text' : 'password'}
                        showPasswordToggle={props.passwordAnswerToggleHandler}
                        dataTypePassword='text'
                        colSize='s12'
                        inputClass="customInputs"
                        maxLength={60}
                        defaultValue='Password@123'
                        isVisable={props.passwordAnswerToggle}
                        name='passwordAnswer'
                        onValueBlur={props.onChangeHandler}
                        disabled={true} />
                </div>
                <div className="col s12 p-0">
                    <CustomInput
                        hasLabel={true}
                        divClassName='col'
                        label={localConstant.techSpec.contactInformation.TS_HOME_PAGE_COMMENTS}
                        type='textarea'
                        colSize='s12'
                        inputClass="customInputs"
                        defaultValue='Comments'
                        name='comments'
                        onValueChange={props.onChangeHandler}
                        disabled={true} />
                </div>
                <div className="col s12 p-0">
                    <CustomInput
                        divClassName='col'
                        switchLabel={localConstant.techSpec.contactInformation.LOCKED_OUT}
                        type='switch'
                        colSize='s3'
                        className="lever"
                        inputClass="customInputs"
                        isSwitchLabel={true}
                        checkedStatus={props.contactInformationDetails.isActive}
                        switchName='isActive'
                        onChangeToggle={props.onChangeHandler} />
                    <CustomInput
                        divClassName='col'
                        switchLabel={localConstant.techSpec.contactInformation.ENABLE_EXTRANET_ACCOUNT}
                        type='switch'
                        colSize='s3'
                        className="lever"
                        inputClass="customInputs"
                        isSwitchLabel={true}
                        checkedStatus={props.contactInformationDetails.isEnableLogin}
                        switchName='isEnableLogin'
                        onChangeToggle={props.onChangeHandler} />
                </div>
            </div>
        </CardPanel>
    );
};
class ContactInformation extends Component {
    constructor(props) {
        super(props);
        this.updatedData = {};
        this.contactDetails={
            PrimaryAddress : {},
            PrimaryEmail: {},
            SecondaryEmail:{},
            PrimaryMobile:{},
            PrimaryPhone:{},
            Emergency: {},
            Fax:{}
                };
        this.state = {
            DOB: '',
            currentDate: moment(),
            licenceExpiryDate: '',
            passportNumberExpiryDate: '',
            inValidDateFormat: false,
            passwordToggle: false,
            passwordAnswerToggle: false,
            checkSelect: false,
            selectedValue: "",
            enablePassportExpiryAndCountry: false,
            enableLicenseExpiry: false,
        };
    }
    passportInputhandler = (e) => {
        if (e.target.name === 'passportNo' && e.target.value !== "")
            this.setState({ enablePassportExpiryAndCountry: true });
        else this.setState({ enablePassportExpiryAndCountry: false });
    }
    licenseInputhandler = (e) => {
        if (e.target.name === 'drivingLicenseNo' && e.target.value !== "")
            this.setState({ enableLicenseExpiry: true });
        else this.setState({ enableLicenseExpiry: false });
    }
    fetchDOB = (date) => {
        this.setState({ DOB: date }, () => {
            this.updatedData.dateOfBirth = this.state.DOB !== null ? this.state.DOB : '';
            this.props.actions.UpdateContactInformation(this.updatedData);
        });
    }
    fetchLicenceExpiryDate = (date) => {
        this.setState({ licenceExpiryDate: date }, () => {
            this.updatedData.drivingLicenseExpiryDate = this.state.licenceExpiryDate !== null ? this.state.licenceExpiryDate : '';
            this.props.actions.UpdateContactInformation(this.updatedData);
        });
    }
    fetchPassportExpiryDate = (date) => {
        this.setState({ passportNumberExpiryDate: date }, () => {
            this.updatedData.passportExpiryDate = this.state.passportNumberExpiryDate !== null ? this.state.passportNumberExpiryDate : '';
            this.props.actions.UpdateContactInformation(this.updatedData);
        });
    }
    passwordToggleHandler = (event) => {
        this.setState({ passwordToggle: !this.state.passwordToggle });
    }
    passwordAnswerToggleHandler = (event) => {
        this.setState({ passwordAnswerToggle: !this.state.passwordAnswerToggle });
    }
    componentDidMount() {
        debugger;
        //this.props.actions.ClearStateCityData();
        if (this.props.location.pathname !== '/createProfile') {
            if(isEmpty(this.props.stateMasterData)){
                const { country, county } = this.contactDetails.PrimaryAddress;
                country && this.props.actions.FetchState(country);
                county && this.props.actions.FetchCity(county);
            }            
        }       
    }
    // To handle Country, State and City
    getStateAndCity = (selectedValueName) => {
        if (selectedValueName === "country") {
            this.props.actions.ClearStateCityData();
            const selectedCountry = this.updatedData[selectedValueName];
            this.props.actions.FetchState(selectedCountry);
        }
        if (selectedValueName === "county") {
            this.props.actions.ClearCityData();
            const selectedState = this.updatedData[selectedValueName];
            this.props.actions.FetchCity(selectedState);
        }
    }
    handleSecurityQuestion = (selectedQuestion) => {
        this.setState({
            checkSelect: true,
            selectedValue: selectedQuestion
        });
    }
    //password answer-login credentials validation
    mandatoryPasswordQuestion = () => {
        if (!isEmpty(this.updatedData.passwordAnswer)) {
            if (isEmpty(this.state.selectedValue))
                IntertekToaster(localConstant.techSpec.contactInformation.SELECT_SECURITY_QUESTION, 'warningToast');
        }
    }
    //login credentials- password validation
    passwordValidation(value, e) {
        const validation = /^[A-Za-z0-9](?=.*[^a-zA-Z0-9])(?!.*\s).{6,14}$/;
        if (validation.test(value))
            return true;
        else {
            IntertekToaster(localConstant.techSpec.contactInformation.PASSWORD_VALIDATION, 'warningToast');
            return e.target.value = '';
        }
    }
    //personal details- firstName middleName and lastName validation
    alphabetsValidation(value) {
        if ((value) &&
            customRegExValidator(/^[a-zA-Z !@#$%^&_*()+\-=[\]{};':"\\|,.<>/?]*$/, 'i', value)) {
            IntertekToaster(localConstant.techSpec.contactInformation.ALPHABETS_VALIDATION, 'warningToast');
            return false;
        }
    }
    //contact details- email validation
    emailValidation(value) {
        if ((value) &&
            customRegExValidator(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'i', value)) {
            IntertekToaster(localConstant.techSpec.contactInformation.EMAIL_VALIDATION, 'warningToast');
            return false;
        }
    }
    onChangeHandler = (e) => {
        debugger;
        const result = formInputChangeHandler(e);
        if (result.name === 'country' || result.name === 'county' || result.name === 'city') {
            this.getStateAndCity(result.name);
        }

        if (result.name === 'passwordSecurityQuestion')
            this.handleSecurityQuestion(result.value);
        if (result.name === 'passwordAnswer')
            this.mandatoryPasswordQuestion();
        if (result.name === 'firstName' || result.name === 'middleName' || result.name === 'lastName')
            this.alphabetsValidation(result.value);
        if (result.name === 'password') {
            this.passwordValidation(result.value, e);
        }

        if (result.name === 'mobileNumber' || result.name === 'emailAddress' || result.name === 'secondaryEmailAddress'
            || result.name === 'emergencyContactName' || result.name === 'telephoneNumber' || result.name === 'otherTelePhoneNumber' || result.name === 'country'
            || result.name === 'county' || result.name === 'city' || result.name === 'postalCode' || result.name === 'address') {

            if (result.name === 'emailAddress') {
                this.contactDetails.PrimaryEmail[result.name] = result.value;
            }
            if (result.name === 'secondaryEmailAddress') {
                this.contactDetails.SecondaryEmail[result.name] = result.value;
            }
            if (result.name === 'mobileNumber') {
                this.contactDetails.PrimaryMobile[result.name] = result.value;
            }
            debugger;
            if (result.name === 'otherTelePhoneNumber') {
                this.contactDetails.PrimaryPhone['telephoneNumber'] = result.value;
            }
            if (result.name === 'emergencyContactName' || result.name === 'telephoneNumber') {
                this.contactDetails.Emergency[result.name] = result.value;
            }
            if (result.name === 'country' || result.name === 'county' || result.name === 'city' || result.name === 'postalCode' || result.name === 'address') {
                this.contactDetails.PrimaryAddress[result.name] = result.value;
            }              
                
        } else {
            this.updatedData[result.name] = result.value;
        }

        // if (result.name == 'firstName' && result.name === 'lastName' && result.name === 'mobileNumber' &&
        //     result.name === 'emailAddress' && result.name === 'country' && result.name === 'county' &&
        //     result.name === 'address') {
        //     this.props.actions.UpdateContactInformation(this.updatedData);
        //     this.props.actions.UpdateContact(this.contactDetails);
        //     this.updatedData = {};
        //     this.contactDetails = {
        //         PrimaryAddress: {}, PrimaryEmail: {}, SecondaryEmail: {}, PrimaryMobile: {}, Emergency: {}, Fax: {}
        //     };
        // }

    };
    
    onblurHand=(e)=>{      
        const result = formInputChangeHandler(e);
        if (result.name === 'emailAddress' || result.name === 'secondaryEmailAddress') {
            this.emailValidation(result.value);           
        }

        if (result.name === 'country' || result.name === 'county' || result.name === 'city' || result.name === 'postalCode' || result.name === 'address'){
            this.contactDetails.PrimaryAddress['contactType'] = "PrimaryAddress";
            this.contactDetails.PrimaryAddress[result.name] = result.value;
        }
          
        if (result.name === 'emailAddress'){
            this.contactDetails.PrimaryEmail['contactType'] = "PrimaryEmail";
            this.contactDetails.PrimaryEmail[result.name] = result.value;
        }
             
        if (result.name === 'secondaryEmailAddress') {
            this.contactDetails.SecondaryEmail['contactType'] = 'SecondaryEmail';
            this.contactDetails.SecondaryEmail[result.name] = result.value;
        }

        if (result.name === 'mobileNumber'){
            this.contactDetails.PrimaryMobile['contactType'] = "PrimaryMobile";
            this.contactDetails.PrimaryMobile[result.name] = result.value;        
        }
           
        debugger;
        if (result.name === 'otherTelePhoneNumber'){
            this.contactDetails.PrimaryPhone['contactType'] = "PrimaryPhone";
            this.contactDetails.PrimaryPhone['telephoneNumber'] = result.value;
        }
            
        if (result.name === 'emergencyContactName' || result.name === 'telephoneNumber'){
            this.contactDetails.Emergency['contactType'] = 'Emergency';
            this.contactDetails.Emergency[result.name] = result.value;
        }                    
        
        if (this.updatedData.firstName !== '' && !isUndefined(this.updatedData.firstName) &&
             !isUndefined(this.updatedData.lastName) && this.updatedData.lastName !== '' && 
             !isUndefined(this.contactDetails.PrimaryMobile.mobileNumber) && 
             this.contactDetails.PrimaryMobile.mobileNumber !== '' &&
             !isUndefined(this.contactDetails.PrimaryEmail.emailAddress) && 
             this.contactDetails.PrimaryEmail.emailAddress !== '' && 
             !isUndefined(this.contactDetails.PrimaryAddress.country) &&
             this.contactDetails.PrimaryAddress.country !== '' && 
             !isUndefined(this.contactDetails.PrimaryMobile.mobileNumber)&&
             this.contactDetails.PrimaryAddress.county !== '' &&
             !isUndefined(this.contactDetails.PrimaryAddress.county)&&
             this.contactDetails.PrimaryAddress.address !== '' &&
             !isUndefined(this.contactDetails.PrimaryAddress.address)) {
                debugger;
            this.props.actions.UpdateContactInformation(this.updatedData);
            this.props.actions.UpdateContact(this.contactDetails);
            this.updatedData = {};
            this.contactDetails = {
                PrimaryAddress: {}, PrimaryEmail: {}, SecondaryEmail: {}, PrimaryMobile: {},PrimaryPhone: {}, Emergency: {}, Fax: {}
            };
        }
        
    }
    
    // To enable license expiry date
    licenseInputhandler = (e) => {
        if (e.target.name === 'drivingLicenseNo' && e.target.value !== "") {
            this.props.actions.FetchLicenseFieldInfo(true);
        }
        else {
            this.props.actions.FetchLicenseFieldInfo(false);
        }
    }
    // To enable passport expiry date and country of origin
    passportInputhandler = (e) => {
        if (e.target.name === 'passportNo' && e.target.value !== "") {
            this.props.actions.FetchPassportFieldInfo(true);
        }
        else {
            this.props.actions.FetchPassportFieldInfo(false);
        }
    }
    // to handle DOB
    dateRangeValidator = (from, to) => {
        let isInValidDate = false;
        if (to !== "" && to !== null) {
            if (from >= to) {
                isInValidDate = true;
                IntertekToaster(localConstant.techSpec.contactInformation.INVALID_DOB_WARNING, 'warningToast');
            }
        }
        return isInValidDate;
    }
    handleDOBDateBlur = (e) => {
        if (e && e.target !== undefined) {
            this.setState({ inValidDateFormat: false });
            if (e.target.value !== "" && e.target.value !== null) {
                if (e && e.target !== undefined) {
                    const isValid = dateUtil.isValidDate(e.target.value);
                    if (!isValid) {
                        IntertekToaster(localConstant.techSpec.common.VALID_DATE_WARNING, 'warningToast');
                        this.setState({ inValidDateFormat: true });
                    } else
                        this.setState({ inValidDateFormat: false });
                    let dateOfBirth = '';
                    if (this.state.DOB !== '' && this.state.DOB !== null)
                        dateOfBirth = this.state.DOB.format(localConstant.techSpec.common.DATE_FORMAT);
                    if (!this.dateRangeValidator(dateOfBirth, this.state.currentDate.format(localConstant.techSpec.common.DATE_FORMAT))
                        && !this.state.inValidDateFormat) {
                        return false;
                    }
                }
            }
        }
    }
    //To handle Expiry Date
    handleExpiryDateBlur = (e) => {
        if (e && e.target !== undefined) {
            const isValid = dateUtil.isValidDate(e.target.value);
            if (!isValid) {
                IntertekToaster(localConstant.techSpec.common.VALID_DATE_WARNING, 'warningToast');
                this.setState({ inValidDateFormat: true });
            }
            else this.setState({ inValidDateFormat: false });
        }
    }
    //Contact Information-modeOfCommunication: Multi Selection Handler
    getMultiSelectedValue = (data) => {
        const selectedItem = mapArrayObject(data, 'value').join(',');
        this.updatedData.modeOfCommunication = selectedItem;
        this.props.actions.UpdateContactInformation(this.updatedData);
    }
    getcontactInfomation=(conatctData)=>{
       
        conatctData && conatctData.map(obj=>{
               if(obj.contactType  === "PrimaryAddress"){
                this.contactDetails.PrimaryAddress['contactType']= obj.contactType;
                this.contactDetails.PrimaryAddress['address']= obj.address;
                this.contactDetails.PrimaryAddress['country']= obj.country;
                this.contactDetails.PrimaryAddress['county']= obj.county;
                this.contactDetails.PrimaryAddress['city']= obj.city;
                this.contactDetails.PrimaryAddress['postalCode']= obj.postalCode;              
               };
               if(obj.contactType === "PrimaryEmail"){
               this.contactDetails.PrimaryEmail['contactType']= obj.contactType;
                this.contactDetails.PrimaryEmail['emailAddress']= obj.emailAddress;
               };
               if(obj.contactType === "SecondaryEmail"){
               this.contactDetails.SecondaryEmail['contactType']= obj.contactType;
                this.contactDetails.SecondaryEmail['secondaryEmailAddress']= obj.secondaryEmailAddress;
               };
               if(obj.contactType === "PrimaryMobile"){
               this.contactDetails.PrimaryMobile['contactType']= obj.contactType;
                this.contactDetails.PrimaryMobile['mobileNumber']= obj.mobileNumber;
               };
               if(obj.contactType === "PrimaryPhone"){
                this.contactDetails.PrimaryPhone['contactType']= obj.contactType;
                this.contactDetails.PrimaryPhone['telePhoneNumber']= obj.telePhoneNumber;
               };
               if(obj.contactType === "Emergency"){
                this.contactDetails.Emergency['contactType']= obj.contactType;
                this.contactDetails.Emergency['emergencyContactName']= obj.emergencyContactName;
                this.contactDetails.Emergency['telephoneNumber']= obj.telephoneNumber;             
               };
               if(obj.contactType === "Fax"){
                this.contactDetails.Fax[ 'contactType' ]= obj.contactType;
                this.contactDetails.Fax[ 'faxNumber' ]= obj.faxNumber;                            
               };
     });
     console.log(this.contactDetails);

    }
    
    render() {
        debugger;
        const { countryMasterData, stateMasterData, cityMasterData, salutationMasterData, contactInformationDetails,contactInfo } = this.props;
        const modelData = { ...this.confirmationModalData, isOpen: this.state.isOpen };
        if(!isEmpty(contactInfo))
        {
         this.getcontactInfomation(contactInfo);
        }
        return (
            <div className="customCard" >
                <CustomModal modalData={modelData} />
                <PersonalDetailsComponent
                    DOB={this.state.DOB} fetchDOB={this.fetchDOB}
                    handleDOBDateBlur={this.handleDOBDateBlur}
                    contactInformationDetails={contactInformationDetails}
                    salutationMasterData={salutationMasterData}
                    onChangeHandler={(e) => this.onChangeHandler(e)}
                />
                <ContactDetailsComponent
                    licenceExpiryDate={this.state.licenceExpiryDate}
                    fetchLicenceExpiryDate={this.fetchLicenceExpiryDate}
                    passportNumberExpiryDate={this.state.passportNumberExpiryDate}
                    fetchPassportExpiryDate={this.fetchPassportExpiryDate}
                    countryMasterData={countryMasterData}
                    handleExpiryDateBlur={this.handleExpiryDateBlur}
                    licenseFieldEnable={this.state.enableLicenseExpiry}
                    licenseInputhandler={this.licenseInputhandler}
                    passportFieldEnable={this.state.enablePassportExpiryAndCountry}
                    passportInputhandler={this.passportInputhandler}
                    onChangeHandler={(e) => this.onChangeHandler(e)}
                    onblurHand={(e) => this.onblurHand(e)}
                    contactInformationDetails={contactInformationDetails}
                    contactDetails={this.contactDetails}
                    secondaryEmailAddress={this.state.secondaryEmailAddress}
                    modeOfCommunicationArray={localConstant.commonConstants.modeOfCommunicationArray}
                    getMultiSelectedValue={this.getMultiSelectedValue}
                    selectedProfileDetails={this.props.selectedProfileDetails}
                />
                <AddressComponent
                    countryMasterData={countryMasterData}
                    stateMasterData={stateMasterData}
                    cityMasterData={cityMasterData}
                    contactInformationDetails={contactInformationDetails}
                    contactDetails={this.contactDetails}
                    onChangeHandler={(e) => this.onChangeHandler(e)}
                />
                <LoginCredentialsComponent
                    contactInformationDetails={contactInformationDetails}
                    passwordToggleHandler={this.passwordToggleHandler}
                    passwordToggle={this.state.passwordToggle}
                    passwordAnswerToggle={this.state.passwordAnswerToggle}
                    passwordAnswerToggleHandler={this.passwordAnswerToggleHandler}
                    passwordSecurityQuestionArray={localConstant.commonConstants.passwordSecurityQuestionArray}
                    onChangeHandler={this.onChangeHandler}
                />
            </div>
        );
    }
}
export default ContactInformation;