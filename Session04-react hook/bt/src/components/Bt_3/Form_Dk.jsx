import React, { useState } from "react";

function Form_Dk() {
  const [start, setStart] = useState("col-lg-12 grid-margin stretch-card");
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    msv: "",
    fullName: "",
    age: "",
    gender: "",
    birthday: "",
    birthplace: "",
    from: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { msv, fullName, age, gender, birthday, birthplace, from } = student;
    const newstudent = {
      msv: msv,
      fullName: fullName,
      age: age,
      gender: gender,
      birthday: birthday,
      birthplace: birthplace,
      from: from,
    };
    !msv ||
    !fullName ||
    !Number(age) ||
    !gender ||
    !Number(birthday) ||
    !birthplace ||
    !from
      ? alert("chưa điền thông tin")
      : setStudents([...students, newstudent]);
    student.msv = "";
    student.fullName = "";
    student.age = "";
    student.gender = "";
    student.birthday = "";
    student.birthplace = "";
    student.from = "";
  };
  const handleDelete = (i) => {
    const listStudents = [...students];
    listStudents.splice(i, 1);
    setStudents(listStudents);
  };
  const handleClick = (e) => {
    e && setStart("col-lg-7 grid-margin stretch-card");
  };
  return (
    <div className="row">
      <div className={start}>
        <div className="card">
          {/* START CONTROL */}
          <div className="card-header">
            <div className="row">
              <div className="col-3">
                <button
                  type="button"
                  className="btn btn-primary btn-icon-text"
                  onClick={handleClick}
                >
                  Thêm mới sinh viên
                </button>
              </div>
              <div className="col-6">
                <form className="search-form" action="#">
                  <i className="icon-search" />
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Here"
                    title="Search here"
                  />
                  <button className="btn btn-primary btn-icon-text">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="col-3 d-flex align-items-center">
                <select className="form-control">
                  <option value>Sắp xếp</option>
                  <option value>ABC def</option>
                  <option value>ABC def</option>
                  <option value>ABC def</option>
                </select>
              </div>
            </div>
          </div>
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((e, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{e.msv}</td>
                      <td>{e.fullName}</td>
                      <td>{e.age}</td>
                      <td>{e.gender}</td>
                      <td>
                        <div className="template-demo">
                          <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                          >
                            Xem
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                          >
                            Sửa
                          </button>
                          <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                            onClick={() => handleDelete(i)}
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample" onSubmit={handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    value={student.msv}
                    name="msv"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    value={student.fullName}
                    name="fullName"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    value={student.age}
                    name="age"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    onChange={handleChange}
                    className="form-control"
                    value={student.gender}
                    name="gender"
                  >
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    onChange={handleChange}
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    value={student.birthday}
                    name="birthday"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                    onChange={handleChange}
                    className="form-control"
                    value={student.birthplace}
                    name="birthplace"
                  >
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="Đà Nẵng">Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea
                    onChange={handleChange}
                    className="form-control"
                    defaultValue={""}
                    value={student.from}
                    name="from"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default Form_Dk;
