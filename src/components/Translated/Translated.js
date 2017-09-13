import React from 'react';
import { injectIntl, intlShape, FormattedMessage, defineMessages, FormattedNumber, FormattedPlural } from 'react-intl';
import { Container, Row, Col, Form, Input } from 'reactstrap';

const Translated = ({
    intl
}) => {
    const { formatMessage } = intl;
    const { name, unreadCount } = {
        name: 'Eric',
        unreadCount: 1000,
    };
    const messages = defineMessages({
        field1: {
            id: 'field.1',
            defaultMessage: 'Creative header',
        },
        field2: {
            id: 'field2',
            defaultMessage: 'Mark todays date: {date}',
        }
    });

    return (
        <Container className="login-form__container">
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <p>
                        <FormattedMessage
                            id="Tooltip.fees"
                            defaultMessage="Click here to understand how we calculate fees."
                        />
                    </p>
                    <p>
                        <FormattedMessage
                            id={'SubHeader.unreadCount'}
                            defaultMessage={'You have {unreadCount} new {notifications}'}
                            values={{
                                unreadCount: (
                                    <b>
                                        <FormattedNumber
                                            value={unreadCount}
                                        />
                                    </b>
                                ),
                                notifications: (
                                    <FormattedPlural
                                        value={unreadCount}
                                        one="notification"
                                        other="notifications"
                                    />
                                ),
                            }}
                        />
                    </p>
                    <p>
                        <FormattedMessage
                            id="msg.welcome"
                            defaultMessage={'Hello {name}, you have {unreadCount, number} {unreadCount, plural, one {message} other {messages}}'}
                            values={{ name: <b>{name}</b>, unreadCount }}
                        />
                    </p>
                    <Form>
                        <div className="login-form__field">
                            <Input name="field" placeholder={formatMessage({ id: "username or email" })} />
                            <Input name="field1" placeholder={formatMessage(messages.field1)} />
                            <Input name="field2" placeholder={formatMessage(messages.field2, {
                                date: new Date()
                            })} />
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

Translated.propTypes = {
    intl: intlShape.isRequired,
};

export default injectIntl(Translated);