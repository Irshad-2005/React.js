import conf from "../conf/conf.js";
import {Client,ID,Databases,Storage,Query} from "appwrite"

class Service{
       client  = new Client();
       database;
       storage;

       constructor()
       {
          this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId);

          this.database = new Databases(this.client);
          this.storage = new Storage(this.client);
       }

       async createPost({title,slug,content,featuredImage,status,userId})
       {
           try {
                 return await this.database.createDocument(
                         conf.appwriteDataBaseId,
                         conf.appwriteCollectionId,slug,
                         {
                            title,
                            content,
                            featuredImage,
                            status,
                            userId
                         }
                        );
            
           } catch (error) {
              console.log("Appwrite service :: createPost error ::",error);
              return false;
              
           }
       }
       async updatePost({title,content,featuredImage,status},slug)
       {
        try {
             return await this.database.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
            
        } catch (error) {
            console.log("Appwrite service :: updatePost error :: ",error);
            return false;
            
        }
       }

       async deletePost(slug)
       {
          try {
              await this.database.deleteDocument(
                conf.appwriteProjectId,
                conf.appwriteCollectionId,
                slug
              );
              return true;
            
          } catch (error) {
            console.log("Appwrite error :: deletePost error ::",error);
            return false;
            
          }
       }

       async getPost(slug)
       {
          try {
            return await this.database.getDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            );
            
          } catch (error) {
            console.log("Appwrite error :: getPost error :: ",error);
            return false;
            
          }
       }

       async getPosts(queries = [Query.equal("status","active")])
       {
          try {

              return await this.database.listDocuments(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                queries
              );
          } catch (error) {
            console.log("Appwirte error :: getPosts error ::",error);
            return false;
            
          }
       }

       // file upload service 
       async uploadFile(file)
       {
        try {
            
            return this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite error :: upload file error ::",error);
            
        }
       }

       async deleteFile(fileId)
       {
          try {
              
              await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
              );
          } catch (error) {
            console.log("Appwrite Error :: delete file error ::",error);
            
          }
       }

       getFileReview(fileId)
       {
         return this.storage.getFileDownload(
            conf.appwriteBucketId,
            fileId
         );
       }
}
       

const service = new Service();

export default service;