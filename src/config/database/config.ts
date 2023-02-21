import { registerAs } from '@nestjs/config';
export default registerAs('dbConfig', () => ({
  dbURL:
    'mongodb+srv://vikas_yadav:vikasyadav@cluster0.r7ukdxt.mongodb.net/chatNestJs',
  testURL:
    'mongodb+srv://vikas_yadav:vikasyadav@cluster0.r7ukdxt.mongodb.net/chatNestJs',
}));
