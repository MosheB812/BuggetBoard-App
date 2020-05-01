-- Connect to RDS command
mysql -h db-buggetboard.cdcuwp9lzavs.us-east-1.rds.amazonaws.com -P 3306 -u admin -p

-- Create DB and Tables
CREATE DATABASE BuggetBoard;

CREATE TABLE Users (
  UID         INT NOT NULL AUTO_INCREMENT,
  FirstName   VARCHAR(255) NOT NULL,
  LastName    VARCHAR(255) NOT NULL,
  PRIMARY KEY (UID)
);

CREATE TABLE Groups (
  GID         INT NOT NULL AUTO_INCREMENT,
  GroupName   VARCHAR(255) NOT NULL,
  CreatedBy   INT NOT NULL,
  PRIMARY KEY (GID),
  FOREIGN KEY (CreatedBy) REFERENCES Users(UID)
);

CREATE TABLE GroupMembers(
  ID          INT NOT NULL AUTO_INCREMENT,
  GID         INT NOT NULL,
  UID         INT NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (GID) REFERENCES Groups(GID),
  FOREIGN KEY (UID) REFERENCES Users(UID)
);

CREATE TABLE Bugs (
  BID         INT NOT NULL AUTO_INCREMENT,
  GID         INT NOT NULL,
  Description VARCHAR(255),
  Summary     VARCHAR(255) NOT NULL,
  Status      VARCHAR(255) NOT NULL,
  Owner       INT NOT NULL,
  CreatedBy   INT NOT NULL,
  CreatedOn   DATE NOT NULL,
  PRIMARY KEY (BID),
  FOREIGN KEY (GID) REFERENCES Groups(GID),
  FOREIGN KEY (Owner) REFERENCES Users(UID),
  FOREIGN KEY (CreatedBy) REFERENCES Users(UID)
);
