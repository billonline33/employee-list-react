import React, { Component } from "react";
import { Modal, Table } from "react-bootstrap";
import "./Card.css";
import moment from "moment";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmployeeDetails: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ showEmployeeDetails: false });
  }

  handleShow() {
    this.setState({ showEmployeeDetails: true });
  }

  render() {
    const employeeInfo = this.props.employeeInfo;

    const alignVerticalBottom = {
      "vertical-align": "bottom"
    };

    const dateJoined = moment(employeeInfo.dateJoined).format("DD/MM/YYYY");

    return (
      <div className={"employee-card-container"}>
        <div className={"photo-container"}>
          <img
            src={employeeInfo.avatar}
            alt={"avatar"}
            onClick={this.handleShow}
          />
        </div>
        <div className={"card-info-container"}>
          <span>
            {employeeInfo.firstName} {employeeInfo.lastName}
          </span>
          <p>{employeeInfo.bio}</p>
        </div>

        <Modal show={this.state.showEmployeeDetails} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body>
            <Table responsive>
              <tbody>
                <tr>
                  <td className="firstTD">
                    <img src={employeeInfo.avatar} alt={"avatar"} />
                  </td>
                  <td style={alignVerticalBottom}>
                    <h3>
                      {" "}
                      {employeeInfo.firstName} {employeeInfo.lastName}{" "}
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td className="nowrap">
                    {employeeInfo.jobTitle}
                    <br />
                    {employeeInfo.age}
                    <br />
                    {dateJoined}
                  </td>
                  <td>{employeeInfo.bio}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Card;
