import React, { Component } from 'react';
import Title from './Title';
import Navigation from './Navigation';
import { FormattedMessage } from 'react-intl';
import TypeTextInput from './TypeTextInput';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

const countryIssueInput = {
    labelContent: <FormattedMessage
        id="Step2.userPassCountryIssue"
        defaultMessage="Country of issue"
    />,
    id: 'countryIssue',
    name: 'countryIssue'
};

const birthPlaceInput = {
    labelContent: <FormattedMessage
        id="Step2.userBirthPlace"
        defaultMessage="Place of birth"
    />,
    id: 'birthPlace',
    name: 'birthPlace'
};

const numPassportInput = {
    labelContent: <FormattedMessage
        id="Step2.userPassportNumber"
        defaultMessage="Passport number"
    />,
    id: 'numPassport',
    name: 'numPassport'
};

const documentNumberInput = {
    labelContent: <FormattedMessage
        id="Step2.userDocumentNumber"
        defaultMessage="Document number"
    />,
    id: 'documentNumber',
    name: 'documentNumber'
};

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passIssueDateCal: {
                passIssueDate:"",
                focused:"",
            },
            passExpDateCal: {
                passExpDate:"",
                focused:"",
            },
            // passExpirationDate:"",
            // passExpirationDateFocused:"",
            
        }
    }
    render() {
        const {
            title1,
            title2,
            title3,
            title4,
            title5,
            step2,
            dot1,
            dot2,
            dot3,
            dot4,
            dot5,
            previousStep,
            followingStep,
            handleClickPreviousStep,
            handleClickFollowingStep
        } = this.props;
        console.log('props STEP2', this.props);
        return (
            <div className='stepBox'>
                <Title
                    title={title2}
                    step={step2}
                />
                <form className='form'>

                    <h2>
                        <FormattedMessage
                            id="Step2.passport"
                            defaultMessage="Passport"
                        />
                    </h2>

                    <TypeTextInput inputText={numPassportInput} />
                    <TypeTextInput inputText={countryIssueInput} />

                    <div className='verticalDisplay'>
                        <label htmlFor='dateIssue'>
                            <FormattedMessage
                                id="Step2.userPassDateIssue"
                                defaultMessage="Date of issue"
                            />
                        </label>
                    <SingleDatePicker
                    date={this.state.passIssueDateCal.passIssueDate} // momentPropTypes.momentObj or null
                    onDateChange={passIssueDate => this.setState({ passIssueDateCal: {passIssueDate}})} // PropTypes.func.isRequired
                    focused={this.state.passIssueDateCal.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ passIssueDateCal:{focused }})} // PropTypes.func.isRequired
                    id="issueDate" // PropTypes.string.isRequired,
                    placeholder= "F.emisión"
                    numberOfMonths= {1}
                    small= {true}
                    />

                        <label htmlFor='expirationDate'>
                            <FormattedMessage
                                id="Step2.userPassExpirationDate"
                                defaultMessage="Expiration date"
                            />
                        </label>
                        <SingleDatePicker
                        date={this.state.passExpDateCal.passExpDate} // momentPropTypes.momentObj or null
                        onDateChange={passExpDate => this.setState({ passExpDateCal: {passExpDate}})} // PropTypes.func.isRequired
                        focused={this.state.passExpDateCal.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ passExpDateCal:{focused}})} // PropTypes.func.isRequired
                        id="expirationDate" // PropTypes.string.isRequired,
                        placeholder= "F.expiración"
                        numberOfMonths= {1}
                        small= {true}
                    />
                    </div>

                    <h2>
                        <FormattedMessage
                            id="Step2.visa"
                            defaultMessage="Visa (optional)"
                        />
                    </h2>

                    <div>
                        <FormattedMessage
                            id="Step2.addVisaDetails"
                            defaultMessage="Add visa details"
                        />
                    </div>

                    <h2>
                        <FormattedMessage
                            id="Step2.dniNie"
                            defaultMessage="Id"
                        />
                    </h2>

                    <div className='verticalDisplay'>
                        <label htmlFor='documentType'>
                        </label>
                        <select id='documentType' name='documentType' value=''>
                            <option value="">
                                <FormattedMessage
                                    id="Step2.type"
                                    defaultMessage="Type"
                                />
                            </option>
                        </select>

                        <TypeTextInput inputText={documentNumberInput} />
                    </div>

                    <div className='verticalDisplay'>
                        <label htmlFor='dateIssue'>
                            <FormattedMessage
                                id="Step2.userDocDateIssue"
                                defaultMessage="Date of issue"
                            />
                        </label>
                        <input id='dateIssue' type='number' name='dateIssue' value='' />

                        <label htmlFor='expirationDate'>
                            <FormattedMessage
                                id="Step2.userDocExpirationDate"
                                defaultMessage="Expiration date"
                            />
                        </label>
                        <input id='expirationDate' type='number' name='expirationDate' value='' />
                    </div>

                    <TypeTextInput inputText={birthPlaceInput} />
                </form>
                
                <Navigation
                    title1={title1}
                    title2={title2}
                    title3={title3}
                    title4={title4}
                    title5={title5}
                    dot1={dot1}
                    dot2={dot2}
                    dot3={dot3}
                    dot4={dot4}
                    dot5={dot5}
                    previousStep={previousStep}
                    followingStep={followingStep}
                    handleClickPreviousStep={handleClickPreviousStep}
                    handleClickFollowingStep={handleClickFollowingStep}
                />
            </div>
        );
    }
}

export default Step2;