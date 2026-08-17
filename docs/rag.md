Powerchat allows you to create per-folder RAG databases, which can be used to share context across chats in the same folder.

- Create a folder in the *Chats* tab
	- A RAG database can only be attached to a chat folder
	- You cannot persist memory across different folders
- Navigate to the folder, click on the ellipsis to show the folder menu, go to *Folder Settings*
- Enable RAG
- Select an embedding model
	- The on-device embedding model uses iOS's own embedding model so the messages can stay on device
	- If using a model from a provider, use that provider's API key
- (Optional) Tweak the RAG settings
- Chats created in the folder are now persisted in the RAG database (unless you choose to not persist a chat in *Chat Settings*)

<video autoplay loop muted playsinline width="100%">
  <source src="./demos/rag.MP4" type="video/mp4">
</video>
