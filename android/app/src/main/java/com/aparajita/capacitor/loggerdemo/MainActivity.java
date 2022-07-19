package com.aparajita.capacitor.loggerdemo;

import com.getcapacitor.BridgeActivity;
import com.aparajita.capacitor.logger.*;

public class MainActivity extends BridgeActivity {
  private Logger logger;

  @Override
  protected void load() {
    super.load();
    logger = new Logger(this);
    logger.info("ready to roll!");
  }
}
