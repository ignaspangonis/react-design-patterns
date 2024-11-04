interface Attachment {
  localPath: string
  data: Buffer
}

interface Storage {
  upload(attachment: Attachment): Promise<void>
  download(attachment: Attachment): Promise<void>
}

class AwsStorage implements Storage {
  constructor(accessKey: string, secretKey: string) {
    console.log(`Connecting to AWS S3 with access key ${accessKey} and secret key ${secretKey}`)
  }

  async upload(attachment: Attachment) {
    sleep(1000)
    console.log(`Uploaded ${attachment.localPath} to AWS S3`)
  }

  async download(attachment: Attachment) {
    sleep(1000)
    console.log(`Downloaded from AWS S3 at ${attachment.localPath}`)
  }
}

class SftpStorage implements Storage {
  constructor(username: string, password: string) {
    console.log(`Connecting to SFTP server with username ${username} and password ${password}`)
  }

  async upload(attachment: Attachment) {
    sleep(1000)
    console.log(`Uploaded ${attachment.localPath} to SFTP server`)
  }

  async download(attachment: Attachment) {
    sleep(1000)
    console.log(`Downloaded from SFTP server at ${attachment.localPath}`)
  }
}

class StorageFactory {
  static createStorage(type: 'aws' | 'sftp'): Storage {
    switch (type) {
      case 'aws':
        return new AwsStorage('accessKey', 'secretKey')
      case 'sftp':
        return new SftpStorage('username', 'password')
      default:
        throw new Error('Invalid storage type')
    }
  }
}

import * as readline from 'readline'
import { sleep } from '../utils/promise'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Promisified function for asking a question
function askQuestion(query: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer)
    })
  })
}

try {
  const type = await askQuestion(`\nWhat storage type would you like to use (aws or sftp)?\n`)
  const storage = StorageFactory.createStorage(type as 'aws' | 'sftp')
  const localPath = await askQuestion(`Enter the file location: `)

  storage.upload({ localPath, data: Buffer.from('Hello, world!') })
  console.log('File uploaded successfully')
} catch (error) {
  console.error('Error during upload:', error)
} finally {
  rl.close()
}
