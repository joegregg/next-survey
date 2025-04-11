import mysql, {
  ConnectionOptions,
  RowDataPacket,
  ResultSetHeader,
} from "mysql2/promise";

const access: ConnectionOptions = {
  host: "localhost",
  port: 3306,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
};

const conn = await mysql.createConnection(access);

export interface Survey extends RowDataPacket {
  idsurvey: number;
  title: string;
  prompt: string;
}

export async function fetchSurveys(): Promise<Survey[]> {
  const query = "SELECT * FROM `survey`;";

  const [surveys] = await conn.query<Survey[]>(query);

  return surveys;
}

export async function fetchSurvey(id: number): Promise<Survey> {
  const query = "SELECT * from survey WHERE idsurvey=?";

  const values = [id];
  const [surveys] = await conn.query<Survey[]>(query, values);

  if (surveys.length == 0) throw Error("Invalid survey id.");

  return surveys[0];
}

export interface Question extends RowDataPacket {
  idquestion: number;
  survey: number;
  question: string;
  responses: string;
}

export async function fetchQuestions(surveyid: number): Promise<Question[]> {
  const query = "SELECT * from question WHERE survey=?";

  const values = [surveyid];
  const [questions] = await conn.query<Question[]>(query, values);

  return questions;
}

export async function removeQuestion(questionid: number) {
  const sql = "DELETE FROM question WHERE idquestion=?";
  const values = [questionid];

  await conn.execute(sql, values);
}

export async function addQuestion(
  surveyid: number,
  question: string,
  responses: string
) {
  const sql = "INSERT INTO question(survey,question,responses) VALUES (?,?,?)";
  const values = [surveyid, question, responses];

  await conn.execute(sql, values);
}

export async function createSurvey(
  title: string,
  prompt: string
): Promise<number> {
  const sql = "INSERT INTO survey(title,prompt) VALUES (?,?)";
  const values = [title, prompt];

  const [result] = await conn.execute<ResultSetHeader>(sql, values);
  const insertId = result.insertId;

  return insertId;
}
