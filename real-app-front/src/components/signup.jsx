import Joi from "joi";
import { toast } from "react-toastify";
import usersService from "../services/usersService";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import withRouter from "./common/withRouter";
import { Navigate } from "react-router-dom";

class Signup extends Form {
  state = {
    form: {
      email: "",
      password: "",
      name: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
    name: Joi.string().required().min(2),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: false };

    try {
      await usersService.createUser(body);
      toast("You are now registered");
      this.props.navigate("/signin");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {
    if (usersService.getUser()) {
      return <Navigate to="/" />;
    }

    return (
      <>
        <PageHeader title="Sign Up with Card App" />
        <div className="row">
          <div className="col-12">
            <p>Sign up to our app!</p>
          </div>
        </div>

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          {this.renderInput({
            name: "email",
            label: "Email",
            type: "email",
            required: true,
          })}
          {this.renderInput({
            name: "password",
            label: "Password",
            type: "password",
            required: true,
          })}
          {this.renderInput({
            name: "name",
            label: "Name",
            required: true,
          })}

          <div className="my-2">{this.renderButton("Sign Up")}</div>
        </form>
      </>
    );
  }
}

export default withRouter(Signup);
