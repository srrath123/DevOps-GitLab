const Base = require("../base");
const ArtifactManager = require("../../api/artifact/artifactManager")
const COMMAND_NAME = 'package'

module.exports = class Package extends Base {

    create(createCommand) {

        const command = createCommand.command(COMMAND_NAME);
        this.addDefaultOptions(command);

        command.requiredOption('-a, --artifacts <artifacts>', 'Artifacts in Json format [ { "name" : "" , "version" : ""} ]')
        .requiredOption('-n, --name <name>', 'package name ');

        command.action((options) => {
            console.log("Create Artifacts action called " )
            new ArtifactManager(options.url,options.token,options.toolId).createPackage(options.name, options.artifacts)
            
        })
    }

}