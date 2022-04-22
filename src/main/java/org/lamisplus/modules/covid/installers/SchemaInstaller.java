package org.lamisplus.modules.covid.installers;

import com.foreach.across.core.annotations.Installer;
import com.foreach.across.core.installers.AcrossLiquibaseInstaller;
import org.springframework.core.annotation.Order;

@Order(1)
@Installer(name = "schema-installer-covid",
        description = "Installs the required covid tables",
        version = 1)
public class SchemaInstaller extends AcrossLiquibaseInstaller {
    public SchemaInstaller() {
        super("classpath:schema/schema.xml");
    }
}
