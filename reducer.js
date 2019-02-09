import { techSpecActionTypes } from '../../constants/actionTypes';

export const ContactInformationReducer = (state, action) => {
    const { type, data } = action;
    debugger;
    switch (type) {
        case techSpecActionTypes.contactInformationActionTypes.UPDATE_CONTACT_INFORMATION:
            state = {
                ...state,
                selectedProfileDetails: {
                    ...state.selectedProfileDetails,
                    TechnicalSpecialistInfo: data
                },
                isbtnDisable: false
            };
            return state;
            case techSpecActionTypes.contactInformationActionTypes.UPDATE_CONTACT:
            state = {
                ...state,
                selectedProfileDetails: {
                    ...state.selectedProfileDetails,
                    TechnicalSpecialistContact: data
                },
                isbtnDisable: false
            };
            return state;

        default:
            return state;
    }
};
