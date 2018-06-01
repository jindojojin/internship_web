import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vietnam'
})
export class VietnamPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case "name":
        return "Họ và tên";
      case "dateOfBirth":
        return "Ngày sinh";
      case "studentCode ":
        return "Mã sinh viên";
      case "class":
        return "Lớp khóa học";
      case "grade":
        return "Niên khóa";
      case "majors":
        return "Chuyên ngành";
      case "address":
        return "Địa chỉ";
      case "gpa":
        return "Điểm TB tích lũy";
      case "graduationYear":
        return "Năm tốt nghiệp";
      case "vnumail":
        return "Vnu mail";
      case "skypeID":
        return "Skype";
      case "email":
        return "Email";
      case "facebook":
        return "Facebook";
      case "phoneNumber":
        return "Số điện thoại";
      case "favorite":
        return "Sở thích";
      case "position":
        return "Chức vụ trong lớp";
      case "orientation":
        return "Định hướng";
      case "department":
        return "Khoa";
      case "note":
        return "Ghi chú";
      // case "":
      //   return "";
      // case "":
      //   return "";

      default:
        return value;
    }
  }

}
