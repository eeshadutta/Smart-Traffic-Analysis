FROM python:3.7
COPY . /project_docs/
WORKDIR /project_docs/
RUN pip3 install mkdocs
EXPOSE 8000
CMD ["mkdocs", "serve"]