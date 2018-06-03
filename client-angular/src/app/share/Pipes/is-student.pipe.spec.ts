import { IsStudentPipe } from './is-student.pipe';

describe('IsStudentPipe', () => {
  it('create an instance', () => {
    const pipe = new IsStudentPipe();
    expect(pipe).toBeTruthy();
  });
});
